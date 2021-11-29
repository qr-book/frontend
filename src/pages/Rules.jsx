import React from "react";

import {
  rule1,
  rule2,
  rule3,
  rule4,
  rule5,
  rule6,
  rule7,
  rule8,
  rule9,
  rule10,
  rule11,
  rule12,
} from "../assets/img/rules";

const doRules = [
  { rule: "make QR codes with your own design", img: rule1 },
  { rule: "share frogs with friends", img: rule2 },
  { rule: "use Qr code for your bussines", img: rule3 },
  { rule: "find best area for your QR codes", img: rule4 },
  { rule: "use QR codes for games and puzzles", img: rule5 },
  { rule: "be a good person", img: rule6 },
];

const dontRules = [
  { rule: "share links blocked in Russian Federation", img: rule7 },
  { rule: "share pornography", img: rule8 },
  { rule: "write comments with swear words", img: rule9 },
  { rule: "advertise something in comments", img: rule10 },
  { rule: "print our QR codes on a toilet paper", img: rule11 },
  { rule: "forget call mom", img: rule12 },
];

function Rules() {
  return (
    <div className="main faq">
      <div className="container">
        <div className="rule-cats">
          <div className="rules-category">
            <span className="rule-category-name">DO</span>
            <div className="rules">
              {doRules.map((obj) => (
                <div className="rule do" key={`${obj.rule}_${obj.img}`}>
                  <div className="rule-img">
                    <img src={obj.img} alt="" />
                  </div>
                  <span>{obj.rule}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rules-category">
            <span className="rule-category-name">DON'T</span>
            <div className="rules">
              {dontRules.map((obj) => (
                <div className="rule dont" key={`${obj.rule}_${obj.img}`}>
                  <div className="rule-img">
                    <img src={obj.img} alt="" />
                  </div>
                  <span>{obj.rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <span className="warning">
          If u got three warns, u will be permanent baned
        </span>
      </div>
    </div>
  );
}

export default Rules;
