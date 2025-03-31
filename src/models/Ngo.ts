import mongoose, { Schema, Document, Model } from "mongoose";

interface INgo extends Document {
  name: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  registrationNumber: string;
  website: string;
  description: string;
  img?: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const NgoSchema: Schema = new Schema(
  {
    name: { type: String, required: true, maxlength: 100, trim: true },

    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },

    mobile: {
      type: String,
      required: true,
      maxlength: 10,
      match: [/^\d{10}$/, "Mobile number must be exactly 10 digits"],
    },

    address: { type: String, required: true, maxlength: 255, trim: true },

    city: { type: String, required: true, maxlength: 15, trim: true },

    state: { type: String, required: true, maxlength: 15, trim: true },

    registrationNumber: {
      type: String, // Changed from Number to String to preserve leading zeros
      required: true,
      unique: true,
      maxlength: 15,
      trim: true,
    },

    website: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
      trim: true,
      match: [/^(https?:\/\/)?(www\.)?[\w-]+\.\w{2,}$/, "Invalid website URL"],
    },

    description: { type: String, required: true, maxlength: 255, trim: true },

    // img: { type: String, maxlength: 255, trim: true, default: "" },

    isActive: { type: Boolean, default: true },

    createdAt: { type: Date, default: Date.now },

    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Ngo: Model<INgo> = mongoose.models.Ngo || mongoose.model<INgo>("Ngo", NgoSchema);

export default Ngo;
