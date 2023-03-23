import React from "react";
import { Heading } from "./Heading";
import { RiLightbulbFlashLine } from "react-icons/ri";

export const WhatIdo = () => {
  return (
    <section className="container mx-auto py-10 px-4" id="WhatIdo">
      <Heading title="Experience" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#06b97a] text-white">
          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className="font-medium text-[20px] mb-[-10px]">
            Principle Software Engineer
          </h2>
          <h4 className="font-medium text-[15px] mb-[-10px]">
            Coca Cola Beverages Pvt. Ltd.
          </h4>
          <h4 className="font-medium text-[15px] mb-[-10px]">
            Lahore, Pakistan
          </h4>
          <h4 className="font-medium text-[15px] ">Mar 2018 - Dec 2022</h4>
          <p>
            Responsible to manage Azure Cloud systems, Azure CICD pipelines,
            Microservices, Container handling, Site Reliability, and monitoring
            the critical systems and services to minimize the downtime and
            ensure their availability.
          </p>
          <p>
            Product Owner of the employee expenses work flow app covering
            Medical, Travel, Vehicle expenses. Employee promotion, Resign
            handling & approvals complete cycle up to 4 to 5 tier. Employees
            authentication with Active Directory.
          </p>
          <p>
            Product Owner of the employee salary slip, PF & other benefits
            project to integrate with SAP through WEB API's and authenticating
            employees with Active Directory. Product Owner of the QMS (Queue
            Management System) is designed to monitor the IN/OUT of the empty &
            Loaded vehicles to the plants to calculate the time consumption to
            serve and manage the vehicles load efficiently.
          </p>
          <p>
            Product Owner of the Time Attendance, Leave Management & OT
            management for all PK Coca Cola Plants.
          </p>
        </div>

        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#06b97a] text-white">
          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className="font-medium text-[20px] mb-[-10px]">
            Senior Software Engineer
          </h2>
          <h4 className="font-medium text-[15px] mb-[-10px]">
            Call Courier Pvt. Ltd.
          </h4>
          <h4 className="font-medium text-[15px] mb-[-10px]">
            Lahore, Pakistan
          </h4>
          <h4 className="font-medium text-[15px] ">Feb 2016 - Dec 2017</h4>
          <p>
            CMS (Courier Management System), LMS(Logistic Management System)
            complete operation life cycle, Consignment Booking, Shipment
            Arrived, P-bag Manifesting, Transit, Out for Delivery, handing Non
            Delivered and Delivered Consignments, COD (Cash on Delivery)
            Handing, Customer Invoice.
          </p>
          <p>
            A Separate Client Portal to to book the consignments via form entry
            and excel file upload, Consignments Tracking, Customize Customer
            Invoice, 20+ Customize Reports Payroll & Wages, Financial Accounts
            system.
          </p>
        </div>

        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#06b97a] text-white">
          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className="font-medium text-[20px] mb-[-10px]">
            Senior Software Engineer
          </h2>
          <h4 className="font-medium text-[15px] mb-[-10px]">
            Needle Craft Pvt. Ltd.
          </h4>
          <h4 className="font-medium text-[15px] mb-[-10px]">Amman, Jordan</h4>
          <h4 className="font-medium text-[15px] ">Jun 2011 - Mar 2015</h4>
          <p>
            Enterprise Resource Planning (ERP) Garment Production (End to End)
            Solutions, Buying/Order Sheet, Fabric Issuance from Store, Cutting
            Plan, Cutting Marker, Cutting Fabric Layer, Cutting Bundle, Bundle
            Embroidery/Printing, Sewing Line Issuance, Sewing Quality, Packing
            Issuance, Packing Quality, PO Audit, Warehouse Transfer, Packing
            Invoice. integrated with Financial/Accounts and Merchandizing
            module. 100+ customize Reports.
          </p>
          <p>
            Merchandizing Moudle includes Buy Sheet, BOM (Bill of Material),
            MPR, PO, GRN, Gate Passes and 30+ customized reports
          </p>
          <p>
            Attendance Management, Leave Management, Payroll & Wages, Import &
            Export Accessories Module. Manage App & Database Servers and
            responsible for the AD Server configurations.
          </p>
        </div>
      </div>
    </section>
  );
};
