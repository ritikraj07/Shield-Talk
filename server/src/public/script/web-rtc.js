const PeerConnection = (() => {
    let peerConnection;

    function createPeerConnection() {
        const config = {
            iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
        };
        peerConnection = new RTCPeerConnection(config);

        // Add local stream
        if (localStream) {
            localStream.getTracks().forEach((track) => {
                peerConnection.addTrack(track, localStream);
            });
        }

        // Handle remote stream
        peerConnection.ontrack = (event) => {
            console.log("Received remote stream");
            remoteVideo.srcObject = event.streams[0];
            updateStatus("Connected");
        };

        // Handle ICE candidates
        peerConnection.onicecandidate = (event) => {
            if (event.candidate && currentCallTarget) {
                console.log("Sending ICE candidate");
                socket.emit("ice-candidate", {
                    to: currentCallTarget,
                    candidate: event.candidate
                });
            }
        };

        // Handle connection state changes
        peerConnection.onconnectionstatechange = (event) => {
            console.log("Connection state:", peerConnection.connectionState);
            switch (peerConnection.connectionState) {
                case "connected":
                    updateStatus("Connected");
                    break;
                case "disconnected":
                case "failed":
                    updateStatus("Disconnected");
                    break;
                case "connecting":
                    updateStatus("Connecting...");
                    break;
            }
        };

        return peerConnection;
    }

    return {
        getInstance() {
            if (!peerConnection) {
                peerConnection = createPeerConnection();
            }
            return peerConnection;
        },
        reset() {
            if (peerConnection) {
                peerConnection.close();
                peerConnection = null;
            }
        }
    }
})(); // <- EXECUTE IMMEDIATELY