class Apext < Formula
    desc "A simple CLI tool to manage and organize your Next.js API routes."
    homepage "https://github.com/lifespikes/apext"
    url "https://github.com/lifespikes/apext/releases/download/v0.2.2/apext-macos-x64.tar.gz"
    sha256 "18573a80b8093035376f338ff789bf5c87807177cf5fbdb0bbe62ca7b8592d9e"
    version "0.2.2"
    def install
      bin.install "apext"
    end
  end