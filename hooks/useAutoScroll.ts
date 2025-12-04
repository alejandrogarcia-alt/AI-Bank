import { useEffect } from 'react';
import { startAutoScroll, stopAutoScroll, AutoScrollOptions } from '@/lib/autoScroll';

/**
 * Hook to trigger auto-scroll when component mounts
 * Useful for pages that want to auto-scroll on load
 */
export function useAutoScroll(options?: AutoScrollOptions & { enabled?: boolean }) {
    const { enabled = true, ...scrollOptions } = options || {};

    useEffect(() => {
        if (enabled) {
            startAutoScroll(scrollOptions);
        }

        return () => {
            stopAutoScroll();
        };
    }, [enabled]);
}

/**
 * Hook to get auto-scroll controls
 * Returns start and stop functions
 */
export function useAutoScrollControls() {
    return {
        start: (options?: AutoScrollOptions) => startAutoScroll(options),
        stop: () => stopAutoScroll(),
    };
}
