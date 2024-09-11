const a = [
    'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
    'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
    'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
    'Orders: shutdown! - Response: Yes Sr!',
    'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
]
const index = str => {
    const result = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ':') {
            result.push(i)
        }
        if (str[i] === '-') {
            result.push(i)
        }
    }
    return result
}


const neuron = arr => {
    let result = {};

    arr.forEach(element => {
        // Split the element into the part before and response part
        const parts = element.split(' - Response: ');
        const prefix = parts[0].split(': ')[0].toLowerCase();
        const rawKey = parts[0].slice(prefix.length + 1).trim(); // Get the raw key
        const questionOrOrder = rawKey.replace(/'/g, '').replace(/ /g, '_'); // Remove single quotes and replace spaces with underscores

        const response = parts[1].trim(); // Get the response and trim any extra spaces

        if (!result[prefix]) {
            result[prefix] = {};
        }

        if (!result[prefix][questionOrOrder]) {
            // For questions
            if (prefix.startsWith('questions')) {
                result[prefix][questionOrOrder] = {
                    question: rawKey.replace(/'/g, ''), // Keep the raw question without quotes
                    responses: []
                };
            }
            // For orders
            else if (prefix.startsWith('orders')) {
                result[prefix][questionOrOrder] = {
                    order: rawKey.replace(/'/g, ''), // Keep the raw order without quotes
                    responses: []
                };
            }
        }

        // Push the response into the array of responses
        result[prefix][questionOrOrder].responses.push(response);
    });

    return result;
}


console.log(neuron(a))