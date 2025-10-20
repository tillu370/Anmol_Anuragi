import React from 'react'
import { Home, User, Briefcase, FileText, MessageCircle, Settings } from 'lucide-react'
import { NavBar } from "./tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Portfolio', url: '/portfolio', icon: Briefcase },
    { name: 'Services', url: '/services', icon: FileText },
    { name: 'Contact', url: '/contact', icon: MessageCircle },
    { name: 'Dashboard', url: '/dashboard', icon: Settings }
  ]

  const handleNavigate = (url: string) => {
    // Handle navigation here - you can integrate with your router
    console.log('Navigating to:', url)
    // For now, just log the navigation
    // You can replace this with your actual navigation logic
  }

  return <NavBar items={navItems} onNavigate={handleNavigate} />
} 