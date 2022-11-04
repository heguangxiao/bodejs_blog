const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        _id: Number,
        name: { type: String, require: true, maxLength: 255, default: '' },
        description: { type: String, maxLength: 600, default: '' },
        image: { type: String, maxLength: 255, default: '' },
        videoId: { type: String, require: true, maxLength: 255, default: '' },
        level: { type: String, require: true, maxLength: 255, default: '' },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        _id: false,
        timestamps: true,
    },
);

mongoose.plugin(slug);
Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
