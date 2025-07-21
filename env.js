import {z} from "zod";

const PortSchema = z.coerce.number().max(6555).default(3000);

export const PORT = PortSchema.parse(process.env.PORT);