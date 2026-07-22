import LandingPage from "@/components/LandingPage";

const AFFILIATE_LINK =
  "https://afflat3e1.com/trk/lnk/8613E3A5-B445-46B2-BA81-CD563CDBA746/?o=31078&c=918277&a=798445&k=B1CC33744E2E31EB6369E323E616FB43&l=36077";

export default function Home() {
  return <LandingPage ctaLink={AFFILIATE_LINK} />;
}
