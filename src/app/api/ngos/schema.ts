import { z } from "zod";

const ngoSchema = z.object({
    name: z.string().min(3).max(100, "Name should be between 3-100 characters"),
    email: z.string().email("Invalid email format"),
    mobile: z.string().length(10, "Mobile number must be exactly 10 digits"),
    address: z.string().min(5).max(255),
    city: z.string().min(2).max(50),
    state: z.string().min(2).max(50),
    registrationNumber: z.string().min(5).max(15),
    website: z.string().url("Invalid website URL"),
    description: z.string().min(10).max(500),
    isActive: z.boolean().optional().default(true),
});

export function validateNgoSchema(body: object) {
    return ngoSchema.safeParse(body);
}