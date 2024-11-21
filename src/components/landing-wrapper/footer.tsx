import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import dayjs from "dayjs";

const InfoItem = ({ icon, title, content }: any) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-navy-800 p-3 rounded-lg">{icon}</div>
      <div>
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        <p className="text-sm text-card-foreground">{content}</p>
      </div>
    </div>
  );
};

const Footer = ({ instituteAbout }: any) => {
  return (
    <footer className="bg-white text-gray-700 text-left">
      <Card className="border-0 rounded-none">
        <CardContent className="p-4 md:p-8">
          <div className="container md:mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-2">
              <InfoItem
                icon={<MapPin className="w-6 h-6" />}
                title="OFFICE ADDRESS"
                content={instituteAbout?.insAddress}
              />
              <InfoItem
                icon={<Phone className="w-6 h-6" />}
                title="CALL US"
                content={instituteAbout?.insPhoneNumber}
              />
              <InfoItem
                icon={<Mail className="w-6 h-6" />}
                title="EMAIL US"
                content={instituteAbout?.insEmail}
              />
            </div>
            <Separator />
            <div className="w-full">
              <div className="bg-card text-card-foreground py-6 md:py-10">
                <div className="container md:mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* How to Reach */}
                  <div className="text-left">
                    <h4 className="text-lg font-semibold mb-4">How to Reach</h4>
                    <p className="text-sm mb-2">
                      {instituteAbout?.landing_control?.footer_links
                        ?.how_to_reach ?? ""}
                    </p>
                  </div>

                  {/* Useful Links 1 */}
                  <div className="text-left">
                    <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
                    <ul className="text-sm space-y-2">
                      {instituteAbout?.landing_control?.usefull_links?.map(
                        (usr: any) => (
                          <li key={usr?._id}>
                            {usr?.attach ? (
                              <Link
                                href={usr?.attach}
                                target="_blank"
                                className="hover:underline"
                              >
                                {usr?.name}
                              </Link>
                            ) : (
                              <Link href="#" className="hover:underline">
                                {usr?.name}
                              </Link>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Internal Links 2 */}
                  <div className="text-left">
                    <h4 className="text-lg font-semibold mb-4">
                      Internal Links
                    </h4>
                    <ul className="text-sm space-y-2">
                      <li>
                        <Link href="#" className="hover:underline">
                          Video Gallery
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Image Gallery
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Committees
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Pinned Activities
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="text-left">
                    <h3 className="font-bold mb-4">Social Links</h3>

                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="bg-card text-card-foreground"
                      >
                        <Link
                          href={
                            instituteAbout?.landing_control?.footer_links
                              ?.facebook_link ?? "https://www.facebook.com/"
                          }
                        >
                          <Facebook className="h-4 w-4 " />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-card text-card-foreground"
                        size="icon"
                        asChild
                      >
                        <Link
                          href={
                            instituteAbout?.landing_control?.footer_links
                              ?.twitter_link ?? "https://twitter.com/"
                          }
                        >
                          <Twitter className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-card text-card-foreground"
                        size="icon"
                        asChild
                      >
                        <Link
                          href={
                            instituteAbout?.landing_control?.footer_links
                              ?.linkedin_link ?? "https://www.linkedin.com/"
                          }
                        >
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-card text-card-foreground"
                        size="icon"
                        asChild
                      >
                        <Link
                          href={
                            instituteAbout?.landing_control?.footer_links
                              ?.youtube_link ?? "https://www.youtube.com/"
                          }
                        >
                          <Youtube className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-card text-card-foreground"
                        size="icon"
                        asChild
                      >
                        <Link
                          href={
                            instituteAbout?.landing_control?.footer_links
                              ?.instagram_link ?? "https://www.instagram.com/"
                          }
                        >
                          <Instagram className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Separator />
      <div className="py-4 bg-primary text-secondary flex items-center justify-center text-center md:text-left">
        <p>
          Copyright ©{dayjs()?.format("YYYY")} All Rights Reserved by Mithikal
          Minds Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
