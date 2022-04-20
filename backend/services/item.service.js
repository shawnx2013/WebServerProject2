const pool = require('../db/database');

const itemService = {
    create: async (item) => {
        let sql = 'INSERT INTO item (name, description) VALUES (?, ?)';
        const [results, fields] = await pool.promise().execute(sql, [
            item.name,
            item.description
        ]);
        return results;
    },

    findById: async (id) => {
        let sql = 'SELECT * FROM item WHERE id = ?';
        const [results, fields] = await pool.promise().execute(sql, [id]);
        return results;
    },

    findAll: async () => {
        let sql = 'SELECT * FROM item';
        const [results, fields] = await pool.promise().execute(sql);
        return results;
    },

    update: async (item) => {
        let sql = 'UPDATE item SET name = ?, description = ?';
        const [results, fields] = await pool.promise().execute(sql, [
            item.name,
            item.description
        ]);
        return results;
    },

    delete: async (id) => {
        let sql = 'DELETE FROM item WHERE id = ?';
        const [results, fields] = await pool.promise().execute(sql, [id]);
        return results;
    }
}

module.exports = itemService;