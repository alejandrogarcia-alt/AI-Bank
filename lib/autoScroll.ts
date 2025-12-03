/**
 * Auto-scroll utility for smooth page tours
 * Automatically scrolls through page content when activated
 */

export interface AutoScrollOptions {
    duration?: number; // Total duration in milliseconds (default: 10000ms = 10s)
    delay?: number; // Delay before starting (default: 500ms)
    pauseAtEnd?: number; // Pause at bottom before returning (default: 1000ms)
    onComplete?: () => void; // Callback when scroll completes
}

export class AutoScrollManager {
    private isScrolling = false;
    private animationFrameId: number | null = null;
    private startTime: number | null = null;

    /**
     * Start auto-scrolling the page
     */
    start(options: AutoScrollOptions = {}) {
        const {
            duration = 10000,
            delay = 500,
            pauseAtEnd = 1000,
            onComplete,
        } = options;

        // Stop any existing scroll
        this.stop();

        // Wait for delay before starting
        setTimeout(() => {
            this.performScroll(duration, pauseAtEnd, onComplete);
        }, delay);
    }

    /**
     * Stop the current auto-scroll
     */
    stop() {
        this.isScrolling = false;
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        this.startTime = null;
    }

    /**
     * Perform the actual scrolling animation
     */
    private performScroll(
        duration: number,
        pauseAtEnd: number,
        onComplete?: () => void
    ) {
        this.isScrolling = true;
        this.startTime = null;

        const maxScroll = Math.max(
            document.documentElement.scrollHeight - window.innerHeight,
            0
        );

        if (maxScroll === 0) {
            // Page doesn't need scrolling
            this.isScrolling = false;
            onComplete?.();
            return;
        }

        const animate = (currentTime: number) => {
            if (!this.isScrolling) return;

            if (this.startTime === null) {
                this.startTime = currentTime;
            }

            const elapsed = currentTime - this.startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-in-out cubic function for smooth animation
            const easeProgress =
                progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            const scrollPosition = maxScroll * easeProgress;
            window.scrollTo(0, scrollPosition);

            if (progress < 1) {
                this.animationFrameId = requestAnimationFrame(animate);
            } else {
                // Reached the bottom, pause then return to top
                setTimeout(() => {
                    if (this.isScrolling) {
                        this.scrollToTop(() => {
                            this.isScrolling = false;
                            onComplete?.();
                        });
                    }
                }, pauseAtEnd);
            }
        };

        this.animationFrameId = requestAnimationFrame(animate);
    }

    /**
     * Smoothly scroll back to top
     */
    private scrollToTop(onComplete?: () => void) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        // Wait for smooth scroll to complete
        setTimeout(() => {
            onComplete?.();
        }, 500);
    }

    /**
     * Check if currently auto-scrolling
     */
    isActive(): boolean {
        return this.isScrolling;
    }
}

// Singleton instance for global access
let autoScrollInstance: AutoScrollManager | null = null;

export function getAutoScrollManager(): AutoScrollManager {
    if (!autoScrollInstance) {
        autoScrollInstance = new AutoScrollManager();
    }
    return autoScrollInstance;
}

/**
 * Convenience function to start auto-scroll
 */
export function startAutoScroll(options?: AutoScrollOptions) {
    const manager = getAutoScrollManager();
    manager.start(options);
}

/**
 * Convenience function to stop auto-scroll
 */
export function stopAutoScroll() {
    const manager = getAutoScrollManager();
    manager.stop();
}
