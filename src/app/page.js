import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">JobCredit</h1>
          <div className="space-x-2">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Submit Jobs with Credits</h1>
          <p className="text-xl mb-8">A complete platform for managing job submissions with a credit-based system.</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">User Authentication</h2>
              <p className="mb-4">Secure login and signup with email verification</p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Dashboard Analytics</h2>
              <p className="mb-4">Track your job submissions and credit usage</p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/dashboard">View Dashboard</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Credit System</h2>
              <p className="mb-4">Purchase and manage credits for job submissions</p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/credits">Manage Credits</Link>
              </Button>
            </div>
          </div>

          <Button size="lg" asChild>
            <Link href="/signup">Sign Up Now</Link>
          </Button>
        </div>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 JobCredit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
