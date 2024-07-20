import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  loading?: boolean;
}

const SecondaryButton: React.FC<ButtonProps> = ({ children, onClick, className, loading }) => {
  const defaultStyles = 'flex justify-center items-center w-[120px] h-[42px] rounded-[30px] bg-transparent text-primary border border-primary font-[500] text-[16px] leading-[16px]';
  const combinedClassNames = classNames(defaultStyles, className, { 'opacity-50 cursor-not-allowed': loading });

  return (
    <button onClick={onClick} className={combinedClassNames} disabled={loading}>
      {loading ? (
        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM2 12a10 10 0 0110-10V0C4.477 0 0 4.477 0 10h2zm-2 0a12 12 0 0112-12V0C3.593 0 0 3.593 0 8h2z"></path>
        </svg>
      ) : (
        children
      )}
    </button>
  );
};

export default SecondaryButton;
