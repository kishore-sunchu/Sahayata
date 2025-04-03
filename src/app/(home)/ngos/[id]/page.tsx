"use client"
import { Ngo } from "@/app/_common/_types/ngo.type";
import NgoLoader from "@/app/components/loaders/skelton/NgoLoader";
import { Response } from "@/utils/response";
import { setTitle } from "@/utils/titleSetter";
import AOS from "aos";
import axios from 'axios';
import { redirect, useParams } from 'next/navigation';
import { useEffect, useState } from "react";

export default function NGO() {
    const [NGO, SetNGO] = useState<Ngo>()
    const [loader, SetLoader] = useState<boolean>(true)
    const param = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
        AOS.refresh();

        const controller = new AbortController();

        const loadNgo = async () => {
            try {
                if (param.id) {
                    const id = param.id
                    const response: Response<{ ngo: Ngo }> = await (await axios.get(`/api/ngos/${id}`, { signal: controller.signal })).data;
                    if (response.isSuccess) {
                        SetNGO(response.payload?.ngo)
                        setTimeout(() => {
                            SetLoader(!loader)
                        }, 800);
                    } else {
                        console.error(response.message, response.errorCode);
                    }
                } else {
                    redirect(`/`)
                }
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.warn('API call cancelled');
                } else {
                    SetLoader(false);
                    console.error('Error while fetching NGO data:', error);
                    setTimeout(() => {
                        redirect('/under-maintenance');
                    }, 1500);
                }
            }
        }
        loadNgo()
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        !loader && setTitle(`${NGO ? NGO.name : 'Ngo'} | NGO Details`)
        return () => {
            controller.abort();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param.id]);

    return (
        loader ? <NgoLoader /> :
            NGO &&
            <main className="min-h-screen py-10 px-6">
                <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
                    {/* NGO Image */}
                    <div className="flex justify-center mb-8">
                        {/* <img
                            src={`${API_URL}${NGO.imageUrl}`}
                            alt={NGO.name}
                            className="w-full max-w-md rounded-lg object-cover shadow"
                        /> */}
                    </div>

                    {/* NGO Details */}
                    <h1 className="text-3xl font-bold text-primaryDark mb-4">{NGO.name}</h1>
                    <p className="text-gray-600 mb-6">{NGO.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-lg font-medium text-primary">Contact Information</h2>
                            <ul className="mt-2 text-gray-600">
                                <li>
                                    <strong>Email:</strong> <a href={`mailto:${NGO.email}`} className="text-gray-600 hover:underline">{NGO.email}</a>
                                </li>
                                <li>
                                    <strong>Contact:</strong> {NGO.mobile}
                                </li>
                                <li>
                                    <strong>Website:</strong>{" "}
                                    <a
                                        href={NGO.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:underline"
                                    >
                                        {NGO.website}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium text-primary">Address</h2>
                            <ul className="mt-2 text-gray-600">
                                <li>
                                    <strong>Address:</strong> {NGO.address}
                                </li>
                                <li>
                                    <strong>City:</strong> {NGO.city}
                                </li>
                                <li>
                                    <strong>State:</strong> {NGO.state}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-lg font-medium text-primary">Registration Information</h2>
                        <p className="mt-2 text-gray-600">
                            <strong>Registration Number:</strong> {NGO.registrationNumber}
                        </p>
                    </div>
                </div>
            </main>
    )
}