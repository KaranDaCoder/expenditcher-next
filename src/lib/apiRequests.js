import { headers } from 'next/headers';

export const getAllExpenses = async (status) => {
  let request = '';
  try {
    if (status) {
      request = await fetch(
        `${process.env.AUTH_URL}/api/expense?status=${status}`,
        {
          method: 'GET',
          cache: 'no-cache',
          headers: headers(),
        }
      );
    } else {
      request = await fetch(`${process.env.AUTH_URL}/api/expense`, {
        method: 'GET',
        cache: 'no-cache',
        headers: headers(),
      });
    }
    if (request.ok) {
      const { total, expense_total, result } = await request.json();
      return { total, expense_total, result };
    } else {
      throw new Error(request.error);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPaymentModes = async () => {
  try {
    const request = await fetch(`${process.env.AUTH_URL}/api/payment-modes`, {
      method: 'GET',
      cache: 'no-cache',
      headers: headers(),
    });
    if (request.ok) {
      const { total, result } = await request.json();
      return { total, result };
    } else {
      throw new Error(request.error);
    }
  } catch (error) {
    console.log(error);
  }
};
