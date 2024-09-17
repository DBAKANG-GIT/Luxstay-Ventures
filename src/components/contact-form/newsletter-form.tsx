'use client';
import { useRef, FormEvent, useState } from 'react';

export default function NewsLetterSignUpForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const subscribeUser = async (e: FormEvent) => {
    e.preventDefault();

    if (inputRef.current) {
      try {
        const res = await fetch('/api/subscribeUser', {
          body: JSON.stringify({
            email: inputRef.current.value,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        });

        const { error, message, status } = await res.json();

        if (status >= 400) {
          if (status === 400 && error.includes('is already a list member')) {
            setIsError(true);
            setMessage('This email is already subscribed.');
          } else if (status === 400) {
            setIsError(true);
            setMessage('Invalid email address.');
          } else if (status === 500) {
            setIsError(true);
            setMessage('Internal Server Error. Please try again later.');
          } else {
            setIsError(true);
            setMessage(error);
          }
        } else {
          setIsError(false);
          setMessage(message);
        }
      } catch (error) {
        setIsError(true);
        setMessage('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <>
      <form
        className="flex flex-col sm:flex-row gap-2 mt-2"
        onSubmit={subscribeUser}
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="bg-white text-black px-4 py-2 rounded-md flex-grow w-full sm:w-auto"
          id="email-input"
          name="email"
          ref={inputRef}
          required
          autoCapitalize="off"
          autoCorrect="off"
        />
        <button
          type="submit"
          className="bg-[#C4A052] text-white px-6 py-2 rounded-md hover:bg-[#B38F3F] transition-colors w-full sm:w-auto"
        >
          Get in Touch
        </button>
      </form>
      {message && (
        <p className={`mt-2 ${isError ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </p>
      )}
    </>
  );
}
