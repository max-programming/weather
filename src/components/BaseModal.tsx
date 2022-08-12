import { motion, Variants } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type BaseModalProps = {
  modalActive: boolean;
  toggleModal: VoidFunction;
};

export default function BaseModal(props: PropsWithChildren<BaseModalProps>) {
  const variants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  };

  return createPortal(
    <motion.div
      className='absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8'
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={variants}
      onClick={props.toggleModal}
    >
      <div
        className='p-4 bg-white self-start mt-32 max-w-screen-md'
        onClick={e => e.stopPropagation()}
      >
        {props.children}
        <button
          className='text-white mt-8 bg-weather-primary py-2 px-6'
          onClick={props.toggleModal}
        >
          Close
        </button>
      </div>
    </motion.div>,
    document.body
  );
}
