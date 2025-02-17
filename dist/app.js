"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = require("./app/modules/user/user.routes");
const config_1 = __importDefault(require("./app/config"));
const handleMongooseError_1 = __importDefault(require("./app/error/handleMongooseError"));
const handleZodError_1 = __importDefault(require("./app/error/handleZodError"));
const zod_1 = require("zod");
const appError_1 = __importDefault(require("./app/error/appError"));
const auth_routes_1 = require("./app/modules/authentication/auth.routes");
const schedule_routes_1 = require("./app/modules/schedule/schedule.routes");
const booking_routes_1 = require("./app/modules/schedule/booking/booking.routes");
const app = (0, express_1.default)();
// middleware 
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes 
app.use('/api/v1/auth', auth_routes_1.authRoutes);
app.use('/api/v1/user', user_routes_1.userRoutes);
// working api runing...... 
app.use('/api/v1/schedule', schedule_routes_1.scheduleRoutes);
app.use('/api/v1/booking', booking_routes_1.bookingRoutes);
// global error handler 
app.use((err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'something wrong';
    let error = [
        {
            path: '',
            message: 'Something wrong'
        }
    ];
    if (err.name === 'ValidationError') {
        const mongooseError = (0, handleMongooseError_1.default)(err);
        statusCode = mongooseError.statusCode;
        message = mongooseError.message;
        error = mongooseError.errorSource;
    }
    else if (err instanceof zod_1.ZodError) {
        const ZodError = (0, handleZodError_1.default)(err);
        statusCode = ZodError.statusCode;
        message = ZodError.message;
        error = ZodError.errorSourse;
    }
    else if (err instanceof appError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
        error = [
            {
                path: '',
                message: err.message
            }
        ];
    }
    res.status(statusCode).json({
        status: 'false global error it',
        message: message,
        error: error,
        stack: config_1.default.node_env === 'development' ? err.stack : null
    });
});
app.get('/', (req, res) => {
    res.send('Gym schedule!');
});
// Handle Not Found api 
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Not Found API",
        error: ""
    });
});
exports.default = app;
