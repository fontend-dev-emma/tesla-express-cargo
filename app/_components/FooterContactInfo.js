"use client";

import { Mail, Phone } from "lucide-react";
import { UseAllCompanySettings } from "../_queryHooks/UseAllCompanySettings";
import { formatPhoneNumber } from "../_utils/helpers";

function FooterContactInfo() {
  const { allSettings } = UseAllCompanySettings();

  return (
    <div className="flex flex-col text-primary-100 mt-6 mb-4">
      <h3 className="text-[1rem] mb-3 text-accent-500 ">Support Team</h3>
      <span className="flex flex-col gap-2">
        <p>
          <a href={`tel:${formatPhoneNumber(allSettings?.companyPhone)}`} className="text-[0.8rem] hover:underline flex gap-3">
            <Phone className="w-4 h-4" />
            {formatPhoneNumber(allSettings?.companyPhone)}
          </a>
        </p>
        <p>
          <a href={`mailto:${allSettings?.companyEmail}`} className="text-[0.8rem]  hover:underline flex gap-3">
            <Mail className="w-4 h-4" />
            {allSettings?.companyEmail}
          </a>
        </p>
      </span>
    </div>
  );
}

export default FooterContactInfo;
