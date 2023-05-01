document.addEventListener('DOMContentLoaded', function() {
    const str = document.getElementById("str");
    const con = document.getElementById("con");
    const dex = document.getElementById("dex");
    const siz = document.getElementById("siz");
    const int = document.getElementById("int");
    const pow = document.getElementById("pow");
    const cha = document.getElementById("cha");
    
    document.addEventListener("input", function() {
        /* characteristics */
        const strValue = parseInt(str.value) || 0;
        const conValue = parseInt(con.value) || 0;
        const dexValue = parseInt(dex.value) || 0;
        const sizValue = parseInt(siz.value) || 0;
        const intValue = parseInt(int.value) || 0;
        const powValue = parseInt(pow.value) || 0;
        const chaValue = parseInt(cha.value) || 0;
        /* Attributes */
        
        let modifierSizStr = sizValue + strValue; // combine sizValue and strValue
        if (modifierSizStr >= 1 && modifierSizStr <= 12) {
            damageModifier.textContent = "-d4";
        } else if (modifierSizStr >= 13 && modifierSizStr <= 24) {
            damageModifier.textContent = "0";
        } else if (modifierSizStr >= 25 && modifierSizStr <= 32) {
            damageModifier.textContent = "+d4";
        } else if (modifierSizStr >= 33 && modifierSizStr <= 40) {
            damageModifier.textContent = "+d6";
        } else if (modifierSizStr >= 41) {
            damageModifier.textContent = "+2d6";
        }
        else {
            console.log("The combined value is outside all the ranges");
        }
        
        /* dexSRM */
        if (dexValue >= 1 && dexValue <= 9) {
            dexSRM.textContent = 4;
        } else if (dexValue >= 10 && dexValue <= 15) {
            dexSRM.textContent = 3;
        } else if (dexValue >= 16 && dexValue <= 19) {
            dexSRM.textContent = 2;
        } else if (dexValue >= 20) {
            dexSRM.textContent = 1;
        } else {
            console.log("The dexterity value is outside all the ranges");
        }
        
        /* sizSRM */
        if (sizValue >= 1 && sizValue <= 9) {
            sizSRM.textContent = 3;
        } else if (sizValue >= 10 && sizValue <= 15) {
            sizSRM.textContent = 2;
        } else if (sizValue >= 16 && sizValue <= 19) {
            sizSRM.textContent = 1;
        } else if (sizValue >= 20) {
            sizSRM.textContent = 0;
        } else {
            console.log("The size value is outside all the ranges");
        }
        
        /*meleeSRM*/
        meleeSRM.textContent = parseInt(sizSRM.textContent) + parseInt(dexSRM.textContent);
        
        /* Skills */
        agility.textContent = Math.max(dexValue - 10, 0) + Math.max(Math.ceil((strValue - 10) / 2), 0) - Math.max(sizValue - 10, 0);
        communication.textContent = Math.max(intValue - 10, 0) + Math.ceil(Math.max(powValue - 10, 0) / 2) + Math.ceil(Math.max(chaValue - 10, 0) / 2);
        knowledge.textContent = Math.max(intValue - 10, 0);
        manipulation.textContent = Math.max(intValue - 10, 0) + Math.max(dexValue - 10, 0) + Math.max(Math.ceil((strValue - 10) / 2), 0);
        perception.textContent = Math.max(intValue - 10, 0) + Math.ceil(Math.max(powValue - 10, 0) / 2) + Math.ceil(Math.max(conValue - 10, 0) / 2);
        stealth.textContent = Math.max(dexValue - 10, 0) - Math.max(sizValue - 10, 0) - Math.max(powValue - 10, 0);
        magic.textContent = Math.max(intValue - 10, 0) + Math.max(powValue - 10, 0) + Math.max(Math.ceil((dexValue - 10) / 2), 0);
        
        
        /* Attribute points */
        hitPoints.textContent = Math.ceil((conValue + sizValue)/2);
        fatiguePoints.textContent = strValue + conValue;
        magicPoints.textContent = powValue;
        
        /* Hit Locations */
        let hitPointsValue = parseInt(hitPoints.textContent);
        if (hitPointsValue >= 1 && hitPointsValue <= 3) {
            rightLeg.textContent = 1;
            leftLeg.textContent = 1;
            abdomen.textContent = 1;
            chest.textContent = 2;
            rightArm.textContent = 1;
            leftArm.textContent = 1;
            head.textContent = 1;
        }
        else if (hitPointsValue >= 4 && hitPointsValue <= 6) {
            rightLeg.textContent = 2;
            leftLeg.textContent = 2;
            abdomen.textContent = 3;
            chest.textContent = 3;
            rightArm.textContent = 2;
            leftArm.textContent = 2;
            head.textContent = 2;
        }
        else if (hitPointsValue >= 7 && hitPointsValue <= 9) {
            rightLeg.textContent = 3;
            leftLeg.textContent = 3;
            abdomen.textContent = 3;
            chest.textContent = 4;
            rightArm.textContent = 3;
            leftArm.textContent = 3;
            head.textContent = 3;
        }
        else if (hitPointsValue >= 10 && hitPointsValue <= 12) {
            rightLeg.textContent = 4;
            leftLeg.textContent = 4;
            abdomen.textContent = 4;
            chest.textContent = 5;
            rightArm.textContent = 3;
            leftArm.textContent = 3;
            head.textContent = 4;
        }
        else if (hitPointsValue >= 13 && hitPointsValue <= 15) {
            rightLeg.textContent = 5;
            leftLeg.textContent = 5;
            abdomen.textContent = 5;
            chest.textContent = 6;
            rightArm.textContent = 4;
            leftArm.textContent = 4;
            head.textContent = 5;
        }
        else if (hitPointsValue >= 16 && hitPointsValue <= 18) {
            rightLeg.textContent = 6;
            leftLeg.textContent = 6;
            abdomen.textContent = 6;
            chest.textContent = 7;
            rightArm.textContent = 5;
            leftArm.textContent = 5;
            head.textContent = 6;
        }
        else if (hitPointsValue >= 19 && hitPointsValue <= 21) {
            rightLeg.textContent = 7;
            leftLeg.textContent = 7;
            abdomen.textContent = 7;
            chest.textContent = 8;
            rightArm.textContent = 6;
            leftArm.textContent = 6;
            head.textContent = 7;
        }

        /* Weapon Skills */
        aMod.textContent = parseInt(manipulation.textContent);
        pMod.textContent = parseInt(agility.textContent);
        
        
        
    });
});