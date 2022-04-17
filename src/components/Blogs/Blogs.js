import React from "react";

const Blogs = () => {
  return (
    <section className="container mx-auto  px-8 py-24">
      <div className="mt-4">
        <h3 className="text-3xl font-semibold text-indigo-500 mb-3">
          Difference between authorization and authentication ?
        </h3>
        <p>
          Authentication means we telling the system who we are by providing
          username and password.On the other hand authorization means things we
          can do according to who we are.So simply authentication is the process
          of verifying us as a user and authorization determines what resources
          we can access as a user.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-3xl font-semibold text-indigo-500 mb-3">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          For user authentication we use firebase.But firebase can do more then
          only usr authentication. it's realtime database lets us build rich,
          collaborative applications by allowing secure access to the database
          directly from client-side code.For this it's so easy to use.There are
          many alternatives of google firebase likes Back4App, AWS Amplify,
          Kuzzle, NativeScript, Couchbase Server etc.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-3xl font-semibold text-indigo-500 mb-3">
          What other services does firebase provide other than authentication?
        </h3>
        <p>
          There are many services which Firebase provides besides
          authentication, Most useful of them are:Cloud Firestore ,Cloud
          Functions , Hosting, Cloud Storage, Google Analytics, Predictions,
          Cloud Messaging, Dynamic Links, Remote Config.
        </p>
      </div>
    </section>
  );
};

export default Blogs;
