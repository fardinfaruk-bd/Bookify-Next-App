<nav className="container mx-auto shadow-md sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <Link href="/" className="flex items-center gap-3">
                <Image src={LogoImage} alt="logo" width={100} height={100} />
            </Link>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><NavLinks href="/">Home</NavLinks></li>
                    <li><NavLinks href="/all-books">All Books</NavLinks></li>
                    <li><NavLinks href="/profile">My Profile</NavLinks></li>
                </ul>
            </div>
            <header className="flex h-16 items-center justify-between px-6">

                <ul className="flex items-center gap-4">
                    <li><NavLinks href="/">Home</NavLinks></li>
                    <li><NavLinks href="/all-books">All Books</NavLinks></li>
                    <li><NavLinks href="/profile">My Profile</NavLinks></li>
                </ul>
                {isPending ? <span className="loading loading-spinner loading-xl"></span> : user ? <div className='flex gap-2 items-center'>
                    <h2 className='font-bold'>{user?.name}</h2>
                    <Image src={user?.image || UserImage} alt={user?.name} width={40} height={40} referrerPolicy='no-referrer' className="rounded-full" />
                    <Button className="bg-red-500 text-white" onClick={async () => await authClient.signOut()}>Logout</Button>
                </div> :
                    <Link href={"/login"}>
                        <Button className="bg-linear-to-r from-[#21217167] to-[#3DAAB0]" >Login</Button>
                    </Link>
                }

            </header>
        </nav>