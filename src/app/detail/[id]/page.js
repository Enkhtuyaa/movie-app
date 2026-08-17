"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Detail() {
  const params = useParams();
  const router = useRouter()
  console.log("this is the param", params);
  return <div>hello form detail page</div>;
}
