import { useForm } from 'react-hook-form'

type FormValues = {
	name: string
	email: string
	message: string
}

export function Contact() {
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>()
	const onSubmit = async (data: FormValues) => {
		await new Promise(r => setTimeout(r, 600))
		alert(`Thank you, ${data.name}! Your message has been sent.`)
	}

	return (
		<main className="mx-auto max-w-2xl px-6 py-16">
			<h1 className="font-heading text-3xl md:text-4xl text-[#1a1a2e]">Get in touch</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
				<div>
					<label className="block text-sm font-medium text-charcoal">Name</label>
					<input className="mt-1 w-full rounded-lg border border-zinc-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" {...register('name', { required: true })} />
					{errors.name && <p className="text-sm text-red-600 mt-1">Name is required</p>}
				</div>
				<div>
					<label className="block text-sm font-medium text-charcoal">Email</label>
					<input type="email" className="mt-1 w-full rounded-lg border border-zinc-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" {...register('email', { required: true })} />
					{errors.email && <p className="text-sm text-red-600 mt-1">Email is required</p>}
				</div>
				<div>
					<label className="block text-sm font-medium text-charcoal">Message</label>
					<textarea rows={5} className="mt-1 w-full rounded-lg border border-zinc-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" {...register('message', { required: true })} />
					{errors.message && <p className="text-sm text-red-600 mt-1">Message is required</p>}
				</div>
				<button type="submit" disabled={isSubmitting} className="rounded-full bg-[#FFD700] text-black px-6 py-3 hover:brightness-95 transition disabled:opacity-50">Send</button>
			</form>
		</main>
	)
}

