"use client";

import { createContactData } from "@/app/_actions/contact";
import { useActionState } from "react";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useActionState(createContactData, initialState);
  console.log(state);
  if (state.status === "success") {
    return (
      <div className="flex items-center justify-center p-8 h-80">
        <p className="bg-gray-100 text-black text-center p-8 rounded-xl w-full max-w-xl">
          お問い合わせいただき、ありがとうございます。
          <br />
          お返事まで今しばらくお待ちください。
        </p>
      </div>
    );
  }
  return (
    <div className="py-16 px-48  rounded-2xl">
      <form action={formAction} className="space-y-4">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">姓</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">名</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">会社名</label>
          <input
            type="text"
            id="company"
            name="company"
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ</label>
          <textarea
            id="message"
            name="message"
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-[rgb(91,209,215)] transition-colors"
          >送信する
          </button>
        </div>
      </form>
    </div>
  );
}
