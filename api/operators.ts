import type { APIRequest } from "https://deno.land/x/aleph/types.ts"
import operators from '../operators.ts';

export default function handler(req: APIRequest) {
  req.status(200).json(operators)
}