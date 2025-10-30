export const Directions = () => {
    return (
        <section className="flex flex-col gap-5">
            <article className="flex flex-col gap-1">
                <p className="text-lg font-bold">
                    테일윈드 CSS 설치 및 기본 세팅 (vite)
                </p>
                <ul className="flex flex-col gap-2">
                    <li>
                        <p>1. Tailwind CSS 설치</p>
                        <img src="/image/tailwind0.png" className="mt-0.5" />
                    </li>
                    <li>
                        <p>2. vite.config에 tailwind 플러그인 추가</p>
                        <img src="/image/tailwind1.png" className="mt-0.5" />
                    </li>
                    <li>
                        <p>3. TailwindCss Import 하기</p>
                        <img src="/image/tailwind2.png" className="mt-0.5" />
                    </li>
                    <li>
                        <p>4. npm run dev로 실행하기</p>
                        <img src="/image/tailwind3.png" className="mt-0.5" />
                    </li>
                </ul>
            </article>

            <div className="w-full h-0.5 bg-[#CECECE]"></div>

            <article className="flex flex-col gap-1">
                <p className="text-lg font-bold">Tailwind CSS 사용하기 (index.css)</p>
                <ul className="flex flex-col gap-2">
                    <li>
                        <p className="indent-1 underline">theme</p>
                        <p className="indent-1">--???-~~ 식으로 커스텀 / tailwind css 공식 사이트에서 확인</p>
                        <img src="/image/example1.png" className="mt-0.5" />
                    </li>
                </ul>
            </article>
        </section>
    );
};
