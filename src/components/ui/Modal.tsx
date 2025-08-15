import { useEffect } from 'react'

type Props = {
	open: boolean
	onClose: () => void
	children: React.ReactNode
}

export function Modal({ open, onClose, children }: Props) {
	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : ''
		return () => { document.body.style.overflow = '' }
	}, [open])

	if (!open) return null
	return (
		<div aria-modal className="fixed inset-0 z-[100]">
			<div className="absolute inset-0 bg-black/50" onClick={onClose} />
			<div className="absolute inset-0 grid place-items-center p-4">
				<div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden">
					<div className="flex justify-end p-3">
						<button onClick={onClose} className="rounded-full px-3 py-1 text-sm hover:bg-zinc-100">Close</button>
					</div>
					<div className="p-6">
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}

