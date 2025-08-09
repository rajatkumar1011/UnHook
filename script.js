// Wait for the DOM to be fully loaded before running the React app
document.addEventListener('DOMContentLoaded', () => {
    const { useState, useEffect, useRef } = React;
    const { motion, AnimatePresence } = window.FramerMotion;

    // --- Re-implementing Lucide Icons as SVG Components ---
    const Play = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('polygon', { points: "5 3 19 12 5 21 5 3" }));
    const Pause = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('rect', { x: "6", y: "4", width: "4", height: "16" }), React.createElement('rect', { x: "14", y: "4", width: "4", height: "16" }));
    const Volume2 = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('polygon', { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }), React.createElement('path', { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }), React.createElement('path', { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }));
    const VolumeX = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('polygon', { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }), React.createElement('line', { x1: "23", y1: "9", x2: "17", y2: "15" }), React.createElement('line', { x1: "17", y1: "9", x2: "23", y2: "15" }));
    const Maximize = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('path', { d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" }));
    const Minimize = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('path', { d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" }));
    const Sun = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('circle', { cx: "12", cy: "12", r: "5" }), React.createElement('line', { x1: "12", y1: "1", x2: "12", y2: "3" }), React.createElement('line', { x1: "12", y1: "21", x2: "12", y2: "23" }), React.createElement('line', { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }), React.createElement('line', { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }), React.createElement('line', { x1: "1", y1: "12", x2: "3", y2: "12" }), React.createElement('line', { x1: "21", y1: "12", x2: "23", y2: "12" }), React.createElement('line', { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }), React.createElement('line', { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" }));
    const Moon = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('path', { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }));
    const Search = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('circle', { cx: "11", cy: "11", r: "8" }), React.createElement('line', { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }));
    const Sparkles = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('path', { d: "M12 3L9.27 9.27L3 12l6.27 2.73L12 21l2.73-6.27L21 12l-6.27-2.73z" }));
    const LoaderCircle = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('path', { d: "M21 12a9 9 0 1 1-6.219-8.56" }));

    const getYouTubeId = (url) => {
        const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const AnimatedBackground = () => {
        const mountRef = useRef(null);
        const bubblesRef = useRef([]);
        const animationFrameId = useRef(null);

        useEffect(() => {
            const currentMount = mountRef.current;
            if (!currentMount) return;
            const numBubbles = 25;
            const bubbleElements = [];
            for (let i = 0; i < numBubbles; i++) {
                const bubbleEl = document.createElement('div');
                const size = Math.random() * 10 + 4;
                bubbleEl.style.width = `${size}vw`;
                bubbleEl.style.height = `${size}vw`;
                bubbleEl.style.position = 'absolute';
                bubbleEl.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                bubbleEl.style.borderRadius = '50%';
                currentMount.appendChild(bubbleEl);
                bubbleElements.push(bubbleEl);
                bubblesRef.current[i] = {
                    el: bubbleEl,
                    x: Math.random() * 100,
                    y: Math.random() * 100 + 100,
                    vx: (Math.random() - 0.5) * 0.05,
                    vy: -(Math.random() * 0.05 + 0.05),
                };
            }
            const animate = () => {
                if (bubblesRef.current.length === 0) return;
                bubblesRef.current.forEach(b => {
                    b.y += b.vy;
                    b.x += b.vx;
                    b.vx += (Math.random() - 0.5) * 0.005;
                    b.vx = Math.max(-0.1, Math.min(0.1, b.vx));
                    if (b.y < -20) {
                        b.y = 110;
                        b.x = Math.random() * 100;
                    }
                    b.el.style.transform = `translate(${b.x}vw, ${b.y}vh)`;
                });
                animationFrameId.current = requestAnimationFrame(animate);
            };
            animate();
            return () => {
                cancelAnimationFrame(animationFrameId.current);
                if (currentMount) {
                    bubbleElements.forEach(el => {
                        if (currentMount.contains(el)) {
                            currentMount.removeChild(el);
                        }
                    });
                }
                bubblesRef.current = [];
            };
        }, []);
        return React.createElement('div', { ref: mountRef, className: "fixed top-0 left-0 w-full h-full overflow-hidden z-0" });
    };

    const App = () => {
        const [theme, setTheme] = useState('dark');
        const [videoId, setVideoId] = useState(null);
        useEffect(() => {
            document.documentElement.className = theme;
        }, [theme]);
        const handleSetVideo = (url) => {
            const id = getYouTubeId(url);
            if (id) setVideoId(id); else alert('Invalid YouTube URL.');
        };
        const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
        const transitionVariants = {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -30 },
        };
        return React.createElement('div', { className: "bg-white dark:bg-[#0d0d0f] text-black dark:text-white min-h-screen transition-colors duration-300 relative" },
            theme === 'dark' && React.createElement(AnimatedBackground),
            React.createElement('div', { className: "relative z-10" },
                React.createElement(AnimatePresence, { mode: "wait" },
                    !videoId ?
                        React.createElement(motion.div, {
                            key: "landing",
                            variants: transitionVariants,
                            initial: "animate",
                            animate: "animate",
                            exit: "exit",
                            transition: { duration: 0.4, ease: "easeInOut" }
                        }, React.createElement(LandingScreen, { onPlay: handleSetVideo, toggleTheme, theme })) :
                        React.createElement(motion.div, {
                            key: "player",
                            variants: transitionVariants,
                            initial: "initial",
                            animate: "animate",
                            exit: "exit",
                            transition: { duration: 0.4, ease: "easeInOut" }
                        }, React.createElement(PlayerScreen, { initialVideoId: videoId, onNewUrl: handleSetVideo, toggleTheme, theme }))
                )
            )
        );
    };

    const LandingScreen = ({ onPlay, toggleTheme, theme }) => {
        const [url, setUrl] = useState('');
        const handleSubmit = (e) => { e.preventDefault(); if (url) onPlay(url); };
        return React.createElement('div', { className: "flex flex-col items-center justify-center min-h-screen p-4" },
            React.createElement('button', { onClick: toggleTheme, className: "absolute top-6 right-6 text-gray-400 hover:text-black dark:hover:text-white transition-colors" },
                theme === 'dark' ? React.createElement(Sun, { size: 20 }) : React.createElement(Moon, { size: 20 })
            ),
            React.createElement('div', { className: "text-center w-full max-w-2xl" },
                React.createElement('h1', { className: "text-5xl md:text-7xl font-bold tracking-tight mb-1" },
                    React.createElement('span', { className: "bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" }, "UnHook")
                ),
                React.createElement('p', { className: "text-2xl md:text-3xl text-blue-500 dark:text-blue-400 mb-8 font-normal tracking-tight" }, "YouTube Video Player"),
                React.createElement('form', { onSubmit: handleSubmit, className: "relative" },
                    React.createElement(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400", size: 20 }),
                    React.createElement('input', { type: "text", value: url, onChange: (e) => setUrl(e.target.value), placeholder: "https://www.youtube.com/watch?v=...", className: "w-full pl-12 pr-4 py-3 rounded-lg text-base bg-gray-100 dark:bg-[#1a1a1c] border dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-normal" })
                )
            )
        );
    };

    const PlayerScreen = ({ initialVideoId, onNewUrl, toggleTheme, theme }) => {
        const [player, setPlayer] = useState(null);
        const [inputValue, setInputValue] = useState('');
        const [videoData, setVideoData] = useState({ title: '', author: '' });
        const [isPlaying, setIsPlaying] = useState(false);
        const [isMuted, setIsMuted] = useState(false);
        const [volume, setVolume] = useState(0.8);
        const [isFullscreen, setIsFullscreen] = useState(false);
        const [showControls, setShowControls] = useState(true);
        const playerContainerRef = useRef(null);
        const controlTimeoutRef = useRef(null);
        const [isGeminiLoading, setIsGeminiLoading] = useState(false);
        const [geminiResult, setGeminiResult] = useState({ title: '', content: '' });
        const [originalSummary, setOriginalSummary] = useState('');

        useEffect(() => {
            if (!window.YT) {
                const tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                document.head.appendChild(tag);
                window.onYouTubeIframeAPIReady = () => createPlayer(initialVideoId);
            } else {
                createPlayer(initialVideoId);
            }
            const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
            document.addEventListener('fullscreenchange', onFullscreenChange);
            return () => { player?.destroy(); document.removeEventListener('fullscreenchange', onFullscreenChange); };
        }, [initialVideoId]);

        useEffect(() => {
            setGeminiResult({ title: '', content: '' });
            setOriginalSummary('');
        }, [initialVideoId]);

        const createPlayer = (videoId) => {
            if (player) player.destroy();
            const newPlayer = new window.YT.Player('youtube-player-iframe', {
                videoId, width: '100%', height: '100%',
                playerVars: { 'autoplay': 1, 'controls': 0, 'rel': 0, 'showinfo': 0, 'modestbranding': 1, 'iv_load_policy': 3, 'fs': 0, 'disablekb': 1 },
                events: { 'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange }
            });
            setPlayer(newPlayer);
        };

        const onPlayerReady = (event) => { setVideoData(event.target.getVideoData()); event.target.setVolume(volume * 100); };
        const onPlayerStateChange = (event) => setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
        const handleMouseMove = () => {
            setShowControls(true);
            clearTimeout(controlTimeoutRef.current);
            controlTimeoutRef.current = setTimeout(() => { if (isPlaying) setShowControls(false); }, 3000);
        };
        const handlePlayPause = () => isPlaying ? player.pauseVideo() : player.playVideo();
        const handleMute = () => { if (isMuted) player.unMute(); else player.mute(); setIsMuted(!isMuted); };
        const handleVolumeChange = (e) => {
            const newVolume = parseFloat(e.target.value);
            setVolume(newVolume);
            player.setVolume(newVolume * 100);
            if (newVolume > 0 && isMuted) setIsMuted(false);
        };
        const handleFullscreen = () => {
            try {
                if (!document.fullscreenElement) {
                    playerContainerRef.current?.requestFullscreen().catch(err => console.warn(`Fullscreen request failed: ${err.message}`));
                } else {
                    document.exitFullscreen();
                }
            } catch (err) {
                console.warn(`Could not enter fullscreen mode: ${err.message}`);
            }
        };
        const handleUrlSubmit = (e) => { e.preventDefault(); onNewUrl(inputValue); };
        const generateWithGemini = async (prompt) => {
            setIsGeminiLoading(true);
            setOriginalSummary('');
            setGeminiResult({ title: '', content: '' });
            const apiKey = "";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
            const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
            try {
                const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
                const result = await response.json();
                const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
                if (text) return text; else throw new Error("No content found.");
            } catch (error) {
                console.error("Gemini API error:", error);
                return `Error: Could not retrieve information. ${error.message}`;
            } finally {
                setIsGeminiLoading(false);
            }
        };
        const handleSummarize = async () => {
            const prompt = `Provide a concise, one-paragraph summary of the YouTube video titled "${videoData.title}" by the creator "${videoData.author}".`;
            const summary = await generateWithGemini(prompt);
            setOriginalSummary(summary);
            setGeminiResult({ title: '✨ AI Summary', content: summary });
        };
        const handleKeyMoments = async () => {
            const prompt = `Suggest 3-5 potential key moments for the video titled "${videoData.title}" by "${videoData.author}". Format them as a list with timestamps (e.g., 00:00 - Intro). Use Markdown for bolding.`;
            const moments = await generateWithGemini(prompt);
            setGeminiResult({ title: '✨ Key Moments', content: moments });
        };
        const handleRelatedTopics = async () => {
            const prompt = `Based on the YouTube video titled "${videoData.title}", generate a list of 5 related topics or concepts a viewer might be interested in exploring next. Use Markdown for bolding.`;
            const topics = await generateWithGemini(prompt);
            setGeminiResult({ title: '✨ Related Topics', content: topics });
        };
        const handleExplainSimply = async () => {
            if (!originalSummary) return;
            const prompt = `Rewrite the following text in a very simple way, suitable for a beginner: "${originalSummary}"`;
            const simplifiedSummary = await generateWithGemini(prompt);
            setGeminiResult({ title: '✨ Simplified Summary', content: simplifiedSummary });
        };
        const formatGeminiContent = (content) => {
            const boldedContent = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            return { __html: boldedContent };
        };
        return React.createElement('div', { className: "flex flex-col lg:flex-row h-screen p-4 md:p-5 gap-5" },
            React.createElement('div', { className: "flex flex-col flex-grow w-full lg:w-2/3" },
                React.createElement('header', { className: "w-full flex justify-between items-center mb-4 flex-shrink-0 lg:hidden" },
                    React.createElement('form', { onSubmit: handleUrlSubmit, className: "relative w-full max-w-lg" },
                        React.createElement(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400", size: 18 }),
                        React.createElement('input', { type: "text", value: inputValue, onChange: (e) => setInputValue(e.target.value), placeholder: "Paste another link...", className: "w-full pl-10 pr-4 py-2 rounded-md text-sm bg-gray-100 dark:bg-[#1a1a1c] border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" })
                    ),
                    React.createElement('button', { onClick: toggleTheme, className: "ml-4 text-gray-400 hover:text-black dark:hover:text-white" },
                        theme === 'dark' ? React.createElement(Sun, { size: 20 }) : React.createElement(Moon, { size: 20 })
                    )
                ),
                React.createElement('div', { ref: playerContainerRef, className: "w-full aspect-video rounded-lg shadow-2xl dark:shadow-[0_0_35px_rgba(168,85,247,0.3)] transition-shadow duration-500 overflow-hidden relative bg-black flex-shrink-0", onMouseMove: handleMouseMove, onMouseLeave: () => isPlaying && setShowControls(false) },
                    React.createElement('div', { id: "youtube-player-iframe", className: "w-full h-full" }),
                    React.createElement(AnimatePresence, null,
                        showControls && React.createElement(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/70 to-transparent" },
                            React.createElement('div', { className: "flex items-center gap-2 sm:gap-4 text-white" },
                                React.createElement('button', { onClick: handlePlayPause, className: "p-2" }, isPlaying ? React.createElement(Pause, { size: 24 }) : React.createElement(Play, { size: 24 })),
                                React.createElement('div', { className: "flex items-center gap-2 w-24" },
                                    React.createElement('button', { onClick: handleMute }, isMuted || volume === 0 ? React.createElement(VolumeX, { size: 24 }) : React.createElement(Volume2, { size: 24 })),
                                    React.createElement('input', { type: "range", min: "0", max: "1", step: "0.05", value: isMuted ? 0 : volume, onChange: handleVolumeChange, className: "w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white" })
                                ),
                                React.createElement('div', { className: "flex-grow text-left ml-4 overflow-hidden" },
                                    React.createElement('p', { className: "text-sm sm:text-base font-medium truncate" }, videoData.title),
                                    React.createElement('p', { className: "text-xs sm:text-sm text-gray-300 truncate font-normal" }, videoData.author)
                                ),
                                React.createElement('button', { onClick: handleFullscreen, className: "p-2" }, isFullscreen ? React.createElement(Minimize, { size: 24 }) : React.createElement(Maximize, { size: 24 }))
                            )
                        )
                    )
                ),
                React.createElement('div', { className: "mt-4 p-4 rounded-lg bg-gray-50 dark:bg-[#1a1a1c] flex-grow overflow-y-auto" },
                    React.createElement('div', { className: "flex items-center gap-3 mb-4 flex-wrap" },
                        React.createElement('button', { onClick: handleSummarize, disabled: isGeminiLoading, className: "flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 disabled:bg-gray-400" }, React.createElement(Sparkles, { size: 16 }), " Summarize"),
                        React.createElement('button', { onClick: handleKeyMoments, disabled: isGeminiLoading, className: "flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 disabled:bg-gray-400" }, React.createElement(Sparkles, { size: 16 }), " Key Moments"),
                        React.createElement('button', { onClick: handleRelatedTopics, disabled: isGeminiLoading, className: "flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 disabled:bg-gray-400" }, React.createElement(Sparkles, { size: 16 }), " Related Topics")
                    ),
                    React.createElement('div', { className: "min-h-[100px]" },
                        isGeminiLoading && React.createElement('div', { className: "flex items-center justify-center h-full text-gray-500" }, React.createElement(LoaderCircle, { className: "animate-spin mr-2" }), "Thinking..."),
                        React.createElement(AnimatePresence, null,
                            geminiResult.content && !isGeminiLoading && React.createElement(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } },
                                React.createElement('div', { className: "flex items-center justify-between mb-2" },
                                    React.createElement('h3', { className: "font-bold text-lg" }, geminiResult.title),
                                    geminiResult.title === '✨ AI Summary' && React.createElement('button', { onClick: handleExplainSimply, disabled: isGeminiLoading, className: "text-xs px-2 py-1 rounded-md bg-purple-500 text-white font-medium hover:bg-purple-600 disabled:bg-gray-400" }, "Explain Simply")
                                ),
                                React.createElement('p', { className: "text-gray-800 dark:text-gray-300 whitespace-pre-wrap leading-relaxed font-normal", dangerouslySetInnerHTML: formatGeminiContent(geminiResult.content) })
                            )
                        )
                    )
                )
            ),
            React.createElement('div', { className: "hidden lg:flex flex-col w-1/3" },
                React.createElement('header', { className: "w-full flex justify-between items-center mb-4 flex-shrink-0" },
                    React.createElement('form', { onSubmit: handleUrlSubmit, className: "relative w-full" },
                        React.createElement(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400", size: 18 }),
                        React.createElement('input', { type: "text", value: inputValue, onChange: (e) => setInputValue(e.target.value), placeholder: "Paste another link...", className: "w-full pl-10 pr-4 py-2 rounded-md text-sm bg-gray-100 dark:bg-[#1a1a1c] border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" })
                    ),
                    React.createElement('button', { onClick: toggleTheme, className: "ml-4 text-gray-400 hover:text-black dark:hover:text-white" },
                        theme === 'dark' ? React.createElement(Sun, { size: 20 }) : React.createElement(Moon, { size: 20 })
                    )
                )
            )
        );
    };

    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(App));
});
</script>
</body>
</html>
