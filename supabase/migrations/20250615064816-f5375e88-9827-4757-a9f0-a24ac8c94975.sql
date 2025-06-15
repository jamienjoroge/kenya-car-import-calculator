
-- Check if the insert policy exists, if not create it
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'crsp_data' 
        AND policyname = 'Allow authenticated users to insert crsp_data'
    ) THEN
        CREATE POLICY "Allow authenticated users to insert crsp_data" 
        ON public.crsp_data 
        FOR INSERT 
        TO authenticated 
        WITH CHECK (true);
    END IF;
END $$;

-- Check if the update policy exists, if not create it
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'crsp_data' 
        AND policyname = 'Allow authenticated users to update crsp_data'
    ) THEN
        CREATE POLICY "Allow authenticated users to update crsp_data" 
        ON public.crsp_data 
        FOR UPDATE 
        TO authenticated 
        USING (true);
    END IF;
END $$;

-- Check if the delete policy exists, if not create it
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'crsp_data' 
        AND policyname = 'Allow authenticated users to delete crsp_data'
    ) THEN
        CREATE POLICY "Allow authenticated users to delete crsp_data" 
        ON public.crsp_data 
        FOR DELETE 
        TO authenticated 
        USING (true);
    END IF;
END $$;
