import cors from "cors";

export const corsOptions = {
  origin: ["http://localhost:5173", "https://yourdomain.com"],
  credentials: true,
};

export default cors(corsOptions);

// export const corsOptionsDelegate = (req: any, callback: any) => {
//   let corsOptions: any;
//   if (req.headers.origin) {
//     corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false }; // disable CORS for this request
//   }
//   callback(null, corsOptions); // callback expects two parameters: error and options
// };