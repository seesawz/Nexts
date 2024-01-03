import React from 'react'
import { ModeToggle } from '@/components/toggleTheme'
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function navbar() {
  return (
    <div className="flex">
      <div className="hidden items-center opacity-60 sm:flex">
        <Link href="/">
          <div className="mr-4 cursor-pointer">Me</div>
        </Link>
        <Link href="/music">
          <div className="mr-2 cursor-pointer">Music</div>
        </Link>
        <Link href="/demos">
          <div className="mr-2 cursor-pointer">Demos</div>
        </Link>
      </div>
      <div className="items-center  flex">
        <div>
          <a href="https://twitter.com/haotan19749134" target="_blank">
            <Button variant="ghost" size="icon">
              <TwitterLogoIcon className="h-[1.2rem] w-[1.2rem]"></TwitterLogoIcon>
            </Button>
          </a>
        </div>
        <div>
          <a href="https://github.com/TAN5452-MD" target="_blank">
            <Button variant="ghost" size="icon">
              <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]"></GitHubLogoIcon>
            </Button>
          </a>
        </div>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  )
}
