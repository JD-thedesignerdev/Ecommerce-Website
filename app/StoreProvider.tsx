"use client"

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { CreateStore, AppStore } from './Redux/Store'

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = CreateStore();
    }
    return <Provider store={storeRef.current}>{children}</Provider>
}