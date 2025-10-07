import mongoose, { Schema, model, models, Document } from 'mongoose';

export interface IBirthdayWish extends Document {
  name: string;
  email?: string;
  message: string;
  isApproved: boolean;
  createdAt: Date;
}

const BirthdayWishSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
    isApproved: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

BirthdayWishSchema.index({ createdAt: -1 });

const BirthdayWish = (models.BirthdayWish as mongoose.Model<IBirthdayWish>) || model<IBirthdayWish>('BirthdayWish', BirthdayWishSchema);

export default BirthdayWish;
