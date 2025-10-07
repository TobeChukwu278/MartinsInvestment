import { useState } from 'react';
import axios from 'axios';

const HandleAuth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCredentials = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        const formData = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        // Add fullname for signup
        if (!isLogin) {
            formData.fullname = e.target.fullname.value;
        }

        try {
            const endpoint = isLogin
                ? 'http://localhost:3001/api/auth/*'
                : 'http://localhost:3001/api/auth/signup';

            const res = await axios.post(endpoint, formData);

            console.log('Auth response:', res.data);

            if (res.data.success) {
                setSuccess(res.data.message || (isLogin ? 'Login successful!' : 'Account created!'));
                // Redirect or update UI here
                if (res.data.redirect) {
                    window.location.href = res.data.redirect;
                }
            } else {
                setError(res.data.error || 'Something went wrong');
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Network error. Please try again.');
            console.error('Auth error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">
                {isLogin ? 'Login' : 'Sign Up'}
            </h2>

            {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
                    {error}
                </div>
            )}

            {success && (
                <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">
                    {success}
                </div>
            )}

            <form onSubmit={handleCredentials} className="space-y-4">
                {!isLogin && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {loading ? 'Please wait...' : (isLogin ? 'Login' : 'Sign Up')}
                </button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-gray-600">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setError('');
                            setSuccess('');
                        }}
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </div>

            {/* Optional: Google Login Button */}
            {/* <div className="mt-4">
                <button
                    onClick={() => window.location.href = 'http://localhost:3001/api/auth/signin/google'}
                    className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                    <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
                    Continue with Google
                </button>
            </div> */}
        </div>
    );
};

export default HandleAuth;