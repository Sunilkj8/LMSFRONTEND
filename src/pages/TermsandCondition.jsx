import React from "react";

const TermsandCondition = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-10">
      <div className="text-4xl"> Terms And Conditions</div>
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          bookVault Terms and Conditions
        </h2>
        <p className="mb-6 text-gray-700">
          Welcome to BookVault! By accessing and using our services, you agree
          to comply with and be bound by the following terms and conditions.
          Please read them carefully before using BookVault.
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. Loan Period:</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>
              The standard loan period for all borrowed books is a maximum of
              thirty (30) days.
            </li>
            <li>
              Borrowers are responsible for returning books within the
              designated loan period.
            </li>
            <li>
              Renewals may be permitted at BookVault's discretion, subject to
              availability and demand. Requests for renewals must be made before
              the original due date. BookVault reserves the right to deny any
              renewal request.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2. Late Returns:</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>
              Failure to return a book by the due date may result in late fees.
              The amount of the late fee will be determined by BookVault and is
              subject to change. Notification of late fees will be sent to the
              borrower.
            </li>
            <li>
              Continued failure to return borrowed materials may result in
              suspension of borrowing privileges and/or other actions deemed
              necessary by BookVault.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. Book Condition:</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>
              Borrowers are responsible for the care of borrowed books. Books
              must be returned in the same condition they were received,
              reasonable wear and tear excepted.
            </li>
            <li>
              Any damage to a book beyond normal wear and tear (including but
              not limited to water damage, torn pages, or writing) will be the
              responsibility of the borrower and may result in charges for
              replacement or repair, as determined by BookVault.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">4. Borrowing Limits:</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>
              BookVault may set limits on the number of books a borrower can
              have checked out simultaneously. These limits are subject to
              change at BookVault's discretion.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">5. User Account:</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>
              Users are responsible for maintaining the confidentiality of their
              account credentials. Any activity that occurs under a user's
              account is their responsibility.
            </li>
            <li>
              Users must provide accurate and up-to-date information when
              creating an account.
            </li>
          </ul>
        </div>

         
      </div>
    </div>
  );
};

export default TermsandCondition;
