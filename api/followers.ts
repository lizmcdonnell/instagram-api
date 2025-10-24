import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cache-Control", "no-store");
  
  // Mock follower count - change this number to test
  const mockCount = 3677;
  
  return res.status(200).json({ count: mockCount });
}
