type Props = { value: number }

export function ProgressBar({ value }: Props) {
	return (
		<div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
			<div className="h-full bg-[#10B981]" style={{ width: `${Math.min(100, Math.max(0, value))}%`, transition: 'width 900ms ease' }} />
		</div>
	)
}

