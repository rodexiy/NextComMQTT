"use client";
import CardEstufa from "@/components/CardEstufa";

export default function dashboard() {
    return (
        <>
            <div className="flex flex-row items-center justify-center pt-8 ">
                <CardEstufa topico="legumes" item="pimentao"></CardEstufa>
            </div>
        </>
    );
}
