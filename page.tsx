"use client"

import { useState, useEffect } from "react"
import { Play, Pause, Mail, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVideoLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const albums = [
    {
      title: "SEGUE",
      year: "2024",
      tracks: 12,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "303 Heaven",
      year: "2023",
      tracks: 10,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Warehouse Days",
      year: "2022",
      tracks: 8,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Summer of Love",
      year: "2021",
      tracks: 14,
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C] via-[#2C2C2C] to-[#1C1C1C] z-10" />
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Band Hero Image"
            className="object-cover w-full h-full opacity-50"
            width={1920}
            height={1080}
            priority
          />
        </div>
        <div className="relative z-20 text-center space-y-8 p-4">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter">
            <span className="text-[#FFD700]">ACID</span>
            <span className="text-white ml-4">WAVE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">The Future Sound of Acid House</p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="mr-2" /> : <Play className="mr-2" />}
              Listen Now
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-24 px-4 md:px-6 bg-[#2C2C2C]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700]">Latest Video</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the visual journey of our latest single, capturing the essence of modern acid house.
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            {videoLoaded ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID?autoplay=0&controls=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 bg-[#1C1C1C] flex items-center justify-center">
                <div className="animate-pulse text-[#FFD700]">Loading...</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Latest Release */}
      {/* <section className="py-24 px-4 md:px-6 bg-[#1C1C1C]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#FFD700]">Latest Release</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#FFD700] blur-2xl opacity-5 group-hover:opacity-10 transition-opacity" />
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Latest Album Cover"
                width={500}
                height={500}
                className="relative rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#FFD700]">Acid Dreams</h3>
              <p className="text-gray-300">
                Our latest album takes you back to the warehouse days with modern 303 acid lines and pounding drum
                machines. Pure analog madness for the modern generation.
              </p>
              <div className="flex gap-4">
                <Button variant="default" className="rounded-full bg-[#FFD700] text-black hover:bg-[#FFD700]/80">
                  Stream Now
                </Button>
                <Button variant="outline" className="rounded-full border-gray-500 text-gray-300 hover:bg-gray-800">
                  View Tracks
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Albums Grid */}
      <section className="py-24 px-4 md:px-6 bg-[#2C2C2C]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#FFD700]">Discography</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {albums.map((album) => (
              <Card
                key={album.title}
                className="bg-[#1C1C1C] border-gray-800 hover:border-[#FFD700] transition-colors group"
              >
                <CardContent className="p-4">
                  <div className="relative">
                    <Image
                      src={album.image || "/placeholder.svg"}
                      alt={album.title}
                      width={400}
                      height={400}
                      className="rounded-lg mb-4 w-full relative"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-[#FFD700]">{album.title}</h3>
                  <p className="text-gray-400">
                    {album.year} • {album.tracks} tracks
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Bio Section */}
      <section className="py-24 px-4 md:px-6 bg-[#1C1C1C]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFD700]">About SEGUE</h2>
                <div className="prose prose-invert prose-yellow">
                  <p className="text-gray-300 leading-relaxed">
                    Segue are an electronic live act born out of the Australian club and warehouse rave circuit of the early 2000s. Originally intended as an occasional side project of members of the Australian mainstay acts of the time (Superfluid and Statler & Waldorf), Segue was carried into regular touring with a timely take on live electronic music with a throwback to the acid house sensibilities of the 1990s.
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    A regular fixture of the rave and festival circuit for a decade, with just a few singles to make their steady performance schedule, the act went into hiatus as the team split across multiple countries and missions in academic and technology. A hiatus broken with the pandemic in 2020, bringing all members back to their home city Brisbane to dig through the archives, and uncover the "lost albums" recovered from studio storage, and begin a series of re-releases that continues into the current era.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-bold mb-6 text-[#FFD700]">The Team</h3>
              <div className="grid gap-6">
                {[
                  {
                    name: "David Ryan",
                    role: "Production, Engineering, Synths (live)",
                    image: "/placeholder.svg?height=200&width=200",
                  },
                  {
                    name: "Leo Hede",
                    role: "Production, DJ, Sequencing (live)",
                    image: "/placeholder.svg?height=200&width=200",
                  },
                  {
                    name: "Kris Swales",
                    role: "Production, Percussion, Drumming (live)",
                    image: "/placeholder.svg?height=200&width=200",
                  },
                ].map((member) => (
                  <div key={member.name} className="flex items-center gap-4 bg-[#2C2C2C] p-4 rounded-lg">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold text-[#FFD700]">{member.name}</h4>
                      <p className="text-gray-400">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Contact */}
      <section className="py-24 px-4 md:px-6 bg-[#2C2C2C]">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700]">Stay Connected</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive updates, warehouse party locations, and early access to tickets.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                type="email"
                className="rounded-full bg-[#1C1C1C] border-gray-800 focus:border-[#FFD700]"
              />
              <Button className="rounded-full bg-[#FFD700] text-black hover:bg-[#FFD700]/80">Subscribe</Button>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-800">
            <div className="flex justify-center gap-6">
              <Link href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#FFD700]">SEGUE</h3>
              <p className="text-sm text-gray-400">Pushing the boundaries of acid house music since 2019.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#FFD700]">Quick Links</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  Music
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  Tour
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  About
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#FFD700]">Connect</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  Instagram
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  Twitter
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  SoundCloud
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  Spotify
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#FFD700]">Contact</h3>
              <div className="text-sm text-gray-400">
                <p>Bookings:</p>
                <a href="mailto:bookings@segue.com" className="hover:text-[#FFD700] transition-colors">
                  bookings@segue.com
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>Press:</p>
                <a href="mailto:press@segue.com" className="hover:text-[#FFD700] transition-colors">
                  press@segue.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} SEGUE. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-sm text-gray-400 hover:text-[#FFD700] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-gray-400 hover:text-[#FFD700] transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

