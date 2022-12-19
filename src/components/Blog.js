import React from "react";

const Blog = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl py-3">What is cors ? </h1>
      <p>
        Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism
        controlled and enforced by the client (web browser). It allows a service
        (API) to indicate any origin other than its own from which the client
        can request resources. It has been designed in response to the
        same-origin policy (SOP) that restricts how a website (HTML document or
        JS script) loaded by one origin can interact with a resource from
        another origin. CORS is used to explicitly allow some cross-origin
        requests while rejecting others.
      </p>
      <h1 className="text-2xl py-3">
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h1>
      <p>
        For most developers, building an authentication system for your app can
        feel a lot like paying taxes. They are both relatively hard to
        understand tasks that you have no choice but doing, and could have big
        consequences if you get them wrong. No one ever started a company to pay
        taxes and no one ever built an app just so they could create a great
        login system. They just seem to be inescapable costs. But now, you can
        at least free yourself from the auth tax. With Firebase Authentication,
        you can outsource your entire authentication system to Firebase so that
        you can concentrate on building great features for your app. Firebase
        Authentication makes it easier to get your users signed-in without
        having to understand the complexities behind implementing your own
        authentication system. It offers a straightforward getting started
        experience, optional UX components designed to minimize user friction,
        and is built on open standards and backed by Google infrastructure.
      </p>

      <h1 className="text-2xl py-3">How does the private route work?</h1>

      <p>
        Private Routes vary based on the Apps, For example, Dashboard, User
        Profile, App Settings, Home etc. In simple words, These routes can be
        accessed only after login. The constraints for Public and Private routes
        are that Public routes should not be accessed after login and Private
        routes should not be accessible before login. In this article, we can
        see. How to create public and private routes using react-router for your
        react apps. Let's start
      </p>
      <h1 className="text-2xl py-3">What is Node? How does Node work?</h1>
      <p>
        The Node.js run-time environment includes everything you need to execute
        a program written in JavaScript.Node.js came into existence when the
        original developers of JavaScript extended it from something you could
        only run in the browser to something you could run on your machine as a
        standalone application. Now you can do much more with JavaScript than
        just making websites interactive. JavaScript now has the capability to
        do things that other scripting languages like Python can do. Both your
        browser JavaScript and Node.js run on the V8 JavaScript runtime engine.
        This engine takes your JavaScript code and converts it into a faster
        machine code. Machine code is low-level code which the computer can run
        without needing to first interpret it.
      </p>
    </div>
  );
};

export default Blog;
