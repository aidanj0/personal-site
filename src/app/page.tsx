import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/subdir">
        <p>subdir</p>
      </Link>
    </>
  );
}
