const { Schema, default: mongoose } = require('mongoose');

const PaymentModeSchema = new Schema(
  {
    payment_mode_name: {
      type: String,
      required: true,
      min: 3,
      max: 60,
    },
    payment_mode_type: {
      type: String,
      default: 'Cash',
      enum: [
        'Credit Card',
        'Debit Card',
        'Checking Account',
        'Saving Account',
        'Cash'
      ],
    },
    owner_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const PaymentMode =
  mongoose.models.PaymentMode ||
  mongoose.model('PaymentMode', PaymentModeSchema);
export default PaymentMode;
