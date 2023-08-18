document.addEventListener("DOMContentLoaded", function () {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const button4 = document.getElementById("button4");
    const button5 = document.getElementById("button5");


button1.addEventListener("click", function () {
    // Redirect to the namepricecheck.html file
    window.location.href = "namepricecheck.html";
});

    button2.addEventListener("click", function () {
        // Code to execute when Button 2 is clicked
    });

    button3.addEventListener("click", function () {
        // Code to execute when Button 3 is clicked
    });

    button4.addEventListener("click", function () {
         // Extract the item name
    const itemNameScreenshotPre = alt1.captureScreenshotRegion(215 * alt1.getScalingFactor(), 210 * alt1.getScalingFactor(), 215 * alt1.getScalingFactor(), 25 * alt1.getScalingFactor());
    const itemnameScreenshotName = alt1.getOCRText(itemNameScreenshotPre).trim().replace(/[^a-zA-Z ]/g, '');
    console.log(`OCR Result: ${itemnameScreenshotName}`);

    // Extract the sold price
    const screenshot1 = alt1.captureScreenshotRegion(624 * alt1.getScalingFactor(), 210 * alt1.getScalingFactor(), 120 * alt1.getScalingFactor(), 24 * alt1.getScalingFactor());
    const price = alt1.getOCRText(screenshot1);
    const priceStr = price.replace(/\D/g, '');
    const numStrWithoutCommas = priceStr.replace(/,/g, '');
    console.log(`Price: ${numStrWithoutCommas}`);
    const priceInt = parseInt(numStrWithoutCommas);

    // Function to execute when the "Send" button is clicked
    function btnClickFunction() {
        const currentUTC = new Date().toISOString(); // Get current UTC time in ISO format
        const groupSendINS = `Beansyboi: INS for ${numStrWithoutCommas} at ${currentUTC}`;

        // Push data to Alt1's API
        // Replace this part with Alt1's API calls to send data to your desired destination

        // Close the Alt1 app
        alt1.closeApp();
    }

    function errorCloseFunction() {
        alt1.closeApp(); // Close the Alt1 app
    }

    // Create the Alt1 app's user interface
    const appUI = `
        <div style="background-color: #F0F8FF; width: 388px; height: 320px; text-align: center;">
            <label style="font-size: 12px;">Name:</label>
            <label style="font-size: 12px;">Price:</label>
            <label style="font-size: 12px;">${itemnameScreenshotName}</label>
            <label style="font-size: 12px;">${price}</label>
            <button style="font-size: 12px; margin-top: 10px;" onclick="btnClickFunction()">Send!</button>
            <button style="font-size: 12px; margin-top: 10px;" onclick="errorCloseFunction()">Error/Close</button>
        </div>
    `;

    // Display the Alt1 app's user interface
    alt1.overLayHtml(appUI);
}

// Call the function to initiate your Alt1 app
insButton_command();
    });

    button5.addEventListener("click", function () {
        // Code to execute when Button 4 is clicked
    });
});
