'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  isLoading: boolean
}

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, visibility: 'hidden' }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 bg-bg-dark flex items-center justify-center z-[9999]"
          id="loader"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-[clamp(3rem,8vw,5.5rem)] font-light tracking-[0.25em] text-gold"
            >
              A.K
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-[0.8rem] tracking-[0.35em] uppercase text-text-muted my-3"
            >
              Curating your world…
            </motion.div>
            <div className="w-[260px] h-[1px] bg-[rgba(201,169,110,0.2)] mx-auto overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, delay: 1.2, ease: 'easeOut' }}
                className="h-full bg-gradient-primary"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
