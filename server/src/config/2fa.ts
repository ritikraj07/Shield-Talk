import speakeasy from "speakeasy";
import qrcode from "qrcode";

export const generate2FA = async (username: string) => {
  const secret = speakeasy.generateSecret({ name: `MyApp (${username})` });

  const qrCode = await qrcode.toDataURL(secret.otpauth_url || "");

  return {
    base32: secret.base32,
    otpauth_url: secret.otpauth_url,
    qrCode, // frontend will display this
  };
};

export const verify2FA = (token: string, userSecret: string) => {
  return speakeasy.totp.verify({
    secret: userSecret,
    encoding: "base32",
    token,
    window: 1,
  });
};
