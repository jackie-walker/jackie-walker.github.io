/**
 * Script to hold configuration values
 */

export let category_1_values = ['American', 'Asian', 'British', 'Dutch', 'European', 'French', 'Fusion', 'German', 'Greek', 'Home Baker', 'Home Based', 'Indonesian', 'Iranian', 'Italian', 'Jaffna', 'Japanese', 'Korean', 'Mainland Chinese', 'Mediterranean', 'Mexican', 'Mongolian', 'North Indian', 'Pakistani', 'South Indian', 'South-East Asian', 'Spanish', 'Sri Lankan', 'Sri Lankan Chinese', 'Swiss', 'Syrian', 'Thai', 'Vietnamese', 'Western'];
export let category_2_values = ['BBQ', 'Biriyani', 'Bites', 'Bread', 'Bubble Tea', 'Burger', 'Cakes', 'Coffee', 'Condiments', 'Curry', 'Desserts', 'Dosa', 'Fast Food', 'Fruit Juice', 'Ice Cream', 'Indian Sweets', 'Kottu', 'Noodles', 'Pasta', 'Pizza', 'Rice', 'Roti', 'Salad', 'Sandwiches', 'Seafood', 'Shakes', 'Shawarma', 'Shellfish', 'Short eats', 'Soft Drinks', 'Soup', 'Stir Fry', 'Street Food', 'Submarine', 'Sushi', 'Tea', 'Waffles', 'Wrap'];
export let category_3_values = ['Beef', 'Chicken', 'Crab', 'Cuttlefish', 'Dairy', 'Duck', 'Eggs', 'Gluten-free', 'Healthy', 'Kid-friendly', 'Lactose-free', 'Lamb', 'Mutton', 'Nuts', 'Pescetarian', 'Pork', 'Prawns', 'Quail', 'Sausages', 'Sugar-free', 'Turkey', 'Vegan', 'Vegetarian', 'Water'];
export let category_4_values = ['Breakfast', 'Brunch', 'Dinner', 'Lunch', 'Snacks'];
export let category_5_values = ['Cold', 'Frozen', 'Hot'];
export let category_6_values = ['Cheesy', 'Crispy', 'Devilled', 'Fried', 'Garlic', 'Grilled', 'Masala', 'Pickles', 'Roast', 'Spicy', 'Stew', 'Sweet', 'Tandoori'];
export let hidden_column_indexes = [3];
export let column_headers_user = ['ItemId', 'ItemName', 'RestaurantId', 'LastUpdatedDate', 'Region', 'Basic Type', 'Dietary Preference', 'Meal Time', 'Food State', 'Other'];
export let column_headers_admin = column_headers_user.concat(['Verified']);
export let columns_user = [
    {
        editor: false
    }, {
        editor: false
    }, {
        editor: false
    }, {
        editor: false
    },
    {
        type: 'dropdown',
        source: category_1_values,
        trimDropdown: false
    },
    {
        type: 'dropdown',
        source: category_2_values,
        trimDropdown: false
    },
    {
        type: 'dropdown',
        source: category_3_values,
        trimDropdown: false
    },
    {
        type: 'dropdown',
        source: category_4_values,
        trimDropdown: false
    },
    {
        type: 'dropdown',
        source: category_5_values,
        trimDropdown: false
    },
    {
        type: 'dropdown',
        source: category_6_values,
        trimDropdown: false
    }
];
export let columns_admin = columns_user.concat([
    {
        type: 'dropdown',
        source: ['Yes', 'No']
    }
]);
export let hands_on_table_license = 'non-commercial-and-evaluation';
export let delimiter = '\u001f';
export let csv_validation_value = ',,,';
export let papa_parse_quote_value = "''''"
