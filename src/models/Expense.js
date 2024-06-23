import mongoose, { Schema } from 'mongoose';

const ExpenseSchema = new Schema(
  {
    category: {
      type: String,
      default: 'Other',
      enum: [
        'Travel',
        'Dining',
        'Entertainment',
        'Automotive',
        'Grocery',
        'Healthcare',
        'Online',
        'Subscription',
        'Grooming',
        'Other',
      ],
    },
    name: {
      type: String,
      required: true,
      min: 5,
      max: 30,
      unique: true,
    },
    amount: {
      type: Number,
      required: [true, 'Problem! Transaction Amount cannot be empty'],
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    state: {
      type: String,
      uppercase: true,
    },
    payment_mode_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PaymentMode',
      requred: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    status: {
      type: String,
      enum: ['Pending', 'Canceled', 'Completed'],
      default: 'Completed',
    },
    desc: {
      type: String,
    },
    owner_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Expense =
  mongoose.models.Expense || mongoose.model('Expense', ExpenseSchema);
export default Expense;
