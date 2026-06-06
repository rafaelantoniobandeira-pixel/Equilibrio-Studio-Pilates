/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  const whatsappUrl =
    'https://wa.me/5561983614547?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20avaliação%20gratuita.';

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', damping: 15 }}
      whileHover={{ scale: 1.12, y: -3 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-7 right-7 w-[54px] h-[54px] rounded-full bg-[#25D366] flex items-center justify-center text-white z-[90] shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_10px_28px_rgba(37,211,102,0.6)] duration-300 group cursor-pointer"
      aria-label="Fale conosco no WhatsApp"
    >
      <svg
        className="w-[28px] h-[28px]"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.01 2.003c-5.502 0-9.972 4.47-9.972 9.973 0 1.758.457 3.479 1.323 5.008L2 22l5.166-1.355a9.923 9.923 0 004.839 1.258h.005c5.501 0 9.97-4.47 9.97-9.974A9.925 9.925 0 0012.01 2.003zM18.15 15.65c-.27-.137-1.611-.795-1.86-.887-.25-.09-.431-.137-.611.137-.183.274-.707.887-.866 1.07-.16.183-.319.206-.59.07-.27-.138-1.14-.42-2.173-1.341-.803-.716-1.346-1.6-1.503-1.875-.159-.274-.017-.421.12-.557.123-.122.271-.32.408-.48.136-.159.182-.273.272-.456.09-.183.045-.343-.022-.48-.069-.136-.615-1.484-.842-2.03-.222-.533-.445-.46-.612-.46-.159-.009-.34-.009-.523-.009-.181 0-.477.069-.727.342-.25.274-.954.933-.954 2.276 0 1.343.977 2.639 1.113 2.822.137.183 1.923 2.936 4.659 4.114.65.28 1.157.447 1.551.572.653.208 1.248.179 1.718.109.523-.078 1.611-.659 1.838-1.297.227-.639.227-1.187.159-1.297-.068-.11-.25-.137-.52-.274z"
        />
      </svg>
    </motion.a>
  );
}

