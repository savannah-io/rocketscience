-- Create the promotional subscribers table
CREATE TABLE promo_subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR NOT NULL UNIQUE,
    discount_code VARCHAR NOT NULL,
    is_used BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
    used_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security (RLS)
ALTER TABLE promo_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous submissions
CREATE POLICY "Allow anonymous submissions" ON promo_subscribers
    FOR INSERT TO anon
    WITH CHECK (true);

-- Create policy to allow reading own submission
CREATE POLICY "Allow reading own submission" ON promo_subscribers
    FOR SELECT TO anon
    USING (true);

-- Create index for performance
CREATE INDEX idx_promo_subscribers_email ON promo_subscribers(email);
CREATE INDEX idx_promo_subscribers_created_at ON promo_subscribers(created_at); 