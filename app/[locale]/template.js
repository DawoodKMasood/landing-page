'use client'

import { useParams } from 'next/navigation'
import Navbar from "@/components/shared/Navbar";

export default function Template({ children }) {
    const params = useParams();

    return (
        <div>
            <Navbar language={params.locale} />
            {children}
        </div>
    );
}